export const getTimeDifference =(postDate)=>{
const datePosted = new Date(postDate);
console.log(datePosted, "posted date");
const timeNow = new Date();
console.log(timeNow);
const milliseconds = Math.floor(timeNow - datePosted);
console.log(milliseconds);
const seconds = Math.floor(milliseconds / 1000);

if(seconds > 59){
    const minutes = Math.floor(seconds / 60);
    if(minutes > 59){
    const hours = Math.floor(minutes / 60);
    if(hours > 23){
        const days = Math.floor(hours / 24);
        if(days > 30){
            const months = Math.floor(days / 30);
            if(months > 11){
                return datePosted.toLocaleDateString("en-us",{
                    day : "numeric",
                    year : "numeric",
                    month : "short"
                })
            } else{
                return `${months} month${months === 1 ? "" : "s"} ago`;
            }
        }else{
            return `${days} day${days === 1 ? "" : "s"} ago`;
        }
    }else{
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    }
    }else{
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    }
}else{
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
}   
}