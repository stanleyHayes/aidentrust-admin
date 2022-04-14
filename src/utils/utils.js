const getInitials = name => {
    const names = name.split(' ');
    if(names.length === 0)
        return 'A';
    else if(name.length === 1)
        return name[0];
    else return `${names[0][0]}${names[1][0]}`
}

export const UTILS = {getInitials};
