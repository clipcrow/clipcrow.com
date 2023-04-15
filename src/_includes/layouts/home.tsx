type Data = {
    title: string;
    content: string;
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
            { data.content }
        </body>
    </html>
)