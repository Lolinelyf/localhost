import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("662b50d34a6f8b7e4ffa"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
