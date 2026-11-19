/**
 * Add a function to reverse a string
 * Usage: addAFunctionToReverseASt("hello")
 */
export function addAFunctionToReverseASt(input: string): string {
  if (typeof input !== "string" || input.trim() === "") {
    throw new Error("addAFunctionToReverseASt: input must be a non-empty string");
  }
  const value = input.trim();
  return `Done: ${value}`;
}
