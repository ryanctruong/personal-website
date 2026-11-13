type RedButtonProps = {
    title?: string
    onClick?: () => void
}


const RedButton = ({ title, onClick }: RedButtonProps) => {
    return (
        <button className="text-sm bg-[#E8412C] hover:bg-[#C0392B] text-white font-bold py-2 px-4 w-fit rounded-2xl cursor-pointer" onClick={onClick}>
            {title}
        </button>
    )
};

export default RedButton;