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

export const differenceBy = (array1, array2, key) => {
    return array1.filter(a => !array2.some(b => b[key] === a[key]))
}


export const isInDesiredForm = (str) => {
    if (str) {
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        var n = Math.floor(Number(str));

        if (n !== Infinity && String(n) === str && n >= 0) {
            return n
        } else {
            return false
        }
    } else {
        return false
    }
}

export const getBase64 = (file) => {

    return new Promise(resolve => {
        let baseURL = "";
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);

        reader.onload = () => {
            baseURL = reader.result;
            resolve(baseURL);
        };
    });
}

export const public_path = () => {
    return process.env.NEXT_PUBLIC_ENV_PUBLIC_PATH
}

export const default_image = () => {
    return process.env.NEXT_PUBLIC_ENV_DEFAULT_IMAGE
}