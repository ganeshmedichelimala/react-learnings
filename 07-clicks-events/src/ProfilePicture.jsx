function ProfilePicture(){
  const imageUrl = "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
  const handleClick = (e) => {
    e.target.style.display = "none"
  }

  return (
    <img onClick={(e)=>handleClick(e)} src={imageUrl}></img>
  )
}
export default ProfilePicture