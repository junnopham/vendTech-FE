import dayjs from "dayjs";

const formatTime = (dateTime: string) => {
    return dayjs(dateTime).format('YYYY-MM-DD HH:mm:ss')
}

export {
    formatTime,
}