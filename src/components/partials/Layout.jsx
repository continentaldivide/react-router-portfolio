import Header from "./Header"

export default function Layout(props) {
    return (
        <>
        <Header handlePageChange={props.handlePageChange}/>
        {props.children}
        </>
    )
}