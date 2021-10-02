import useWebAnimations from "@wellyshen/use-web-animations";

function Header() {
    const { ref } = useWebAnimations({
        keyframes: [
            { width: "0vw" },
            { width: "90vw" }
        ],
        animationOptions: {
            duration: 2000,
            direction: "alternate",
            iterations: Infinity,
        }
})

return (
        <div ref={ref} className="header">
            Created By Abdul Hannan!
        </div>
    );
}
export default Header;