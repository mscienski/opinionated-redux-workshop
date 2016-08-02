export default (baseActionType) => ({
    start: `${baseActionType}_START`,
    success: `${baseActionType}_SUCCESS`,
    error: `${baseActionType}_ERROR`
})
