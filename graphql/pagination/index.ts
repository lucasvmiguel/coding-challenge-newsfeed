const LIMIT_DEFAULT = Number(process.env.PAGINATION_DEFAULT_LIMIT) || 10
const LIMIT_MAX = Number(process.env.PAGINATION_MAX_LIMIT) || 10

export const limitQueryParam = (limit: number): number => {
  if (!Number.isInteger(limit)) {
    return LIMIT_DEFAULT
  }

  if (limit > LIMIT_MAX || limit <= 0) {
    return LIMIT_DEFAULT
  }

  return limit
}

export const offsetQueryParam = (offset: number): number => {
  if (!Number.isInteger(offset)) {
    return 0
  }

  if (offset <= 0) {
    return 0
  }

  return offset
}
