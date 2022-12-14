export const ucFirst = (str = "test") => {
    if (str == null) {
        return '';
    }
    if (parseInt(str)) {
        return str
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export const strSlice = (str = 'no conent', leangth, demoStr) => {
    if (str == null || str == '') {
        return demoStr;
    }
    return str.slice(0, leangth) + (str.length > leangth ? "..." : '');
}

export const convertToSlug = (str = "test") => {
    // str = str?.replace(' ', '')
    return str?.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

export const capitalizeFirst = (str = "test") => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
}