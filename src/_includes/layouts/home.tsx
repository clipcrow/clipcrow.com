type Data = {
    title: string;
    children: string;
}

function Title(props: { title: string }) {
    return (
        <title>{props.title}</title>
    )
}

export default (data: Data) => (
    <html>
        <head>
            <Title title={data.title}/>
        </head>
        <body>
            { data.children }
            <a href="/">Home</a>
            <a href="/about">About</a>
        </body>
    </html>
)