import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"; // Make sure to import GithubProvider
import GoogleProvider from "next-auth/providers/google"; // Make sure to import GoogleProvider
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";
import { nanoid } from "nanoid";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined, req) {
        // Check if credentials are provided
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const { email, password } = credentials;

        try {
          // Find user by email
          const user = await prisma.user.findFirst({
            where: { email },
          });

          // Check if user exists and password is correct
          if (user && (await bcrypt.compare(password, user.password || ""))) {
            // Return user object if successful
            return {
              id: user.id,
              email: user.email,
              role: user.role,
            } as AuthUser; // Explicitly cast to AuthUser type
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authorization failed"); // Throw an error to indicate failure
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }:any) {
      try {
        if (account?.provider === "credentials") {
          return true; // Allow sign in for credentials provider
        }

        // Check for existing user for GitHub/Google providers
        const existingUser = await prisma.user.findFirst({
          where: { email: user.email },
        });

        if (!existingUser) {
          // Create a new user if they don't exist
          await prisma.user.create({
            data: {
              id: nanoid(), // Generate a unique ID
              email: user.email,
              // Add any additional fields as necessary
            },
          });
        }

        return true; // Allow sign in
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false; // Prevent sign in on error
      }
    },
    async session({ session, user }:any) {
      // Include user role in session if needed
      session.user.role = user.role;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
