type ButtonProps = {
  text: string;
}
const Button = ({text}: ButtonProps) => {
  return (
    <>
        <button className="bg-red-600 p-5 px-10 my-10 rounded-4xl text-white text-2xl">{text}</button>
    </>
  )
}

export default Button