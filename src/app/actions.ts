"use server";

import { client } from "@/lib/db/mongodb";

interface Event {
  title: string; // Short description of an event
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  detailsRaw: string; // First-person perspective of an event
  detailsSummary: string; // Summarized third-person perspective
}

export async function createEvent(event: Event): Promise<void> {
  try {
    // Connect to the database
    await client.connect();
    const database = client.db(); // Replace with your database name
    const eventsCollection = database.collection("events"); // Replace with your collection name

    // Insert the event
    const result = await eventsCollection.insertOne(event);
    console.log(`New event created with id: ${result.insertedId}`);
  } catch (error) {
    console.error("Error creating event:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}
