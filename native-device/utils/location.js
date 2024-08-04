const GOOGLE_API_KEY="AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4";

export function getMapPreview(lat,lon){
    const imagePreview=`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=400x200&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE
    `;
    console.log(imagePreview)
    return imagePreview;
}