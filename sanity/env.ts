export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-27'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skKSLSmhwuM2tWAPjyuOQwldnkLsQCYV0DnbbtPMkdIwf0QLPZGuk9kL9GPZzij0NTUlSnoHsWqWdr75cJE4o1bBMJH6NXQ0EDTeeVihTqREmct49poMzeQToGkKGf5SsvFF8UZ134h6hkx8qerMNuamP5CvnAinP7AcCiYJQM9IjuOCuAU0",
  'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
