# Next.js 15 App Router Edge Case Error Handling

This repository demonstrates an uncommon bug in Next.js 15's App Router related to error handling within `getServerSideProps` when fetching data for dynamic routes. The bug occurs when a route parameter leads to a non-existent resource, and the error isn't handled gracefully.

## Bug Description
The issue arises in scenarios where data fetching within `getServerSideProps` depends on a dynamic route segment.  If this segment points to a missing resource (e.g., a non-existent product ID), and the error isn't properly managed, it can lead to unexpected behavior or app crashes.

## Reproduction
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to a route with an invalid product ID (e.g., `/product/invalid`). Observe the error behavior.

## Solution
The `bugSolution.js` file shows the improved `getServerSideProps` function.  It includes comprehensive error handling to gracefully manage cases where the data fetching fails, preventing the app from crashing and providing a user-friendly error message.