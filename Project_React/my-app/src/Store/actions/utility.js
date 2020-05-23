export const updateObject = (oldObject, updatedPropertes) => {
    return {
        ...oldObject,
        ...updatedPropertes
    }
}