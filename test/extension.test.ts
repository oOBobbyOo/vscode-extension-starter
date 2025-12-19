import { describe, expect, it } from 'vitest'

describe('extension Test Suite', () => {
  it('sample test', () => {
    expect([1, 2, 3].indexOf(5)).toBe(-1)
    expect([1, 2, 3].indexOf(0)).toBe(-1)
  })
})
