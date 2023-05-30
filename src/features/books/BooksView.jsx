import { Typography, Card, CardBody } from '@material-tailwind/react'
import React from 'react'
import { useSelector } from 'react-redux'

// id: 1,
//     title: 'The Hunger Games',
//         author: 'Suzanne Collins'
const TABLE_HEAD = ["Id", "Title", "Author", "Actions"];

export default function BooksView() {

    const books = useSelector(
        (state) => state.booksReducer.books
    );


    return (
        <>
            <Card className="mt-10 justify-center mx-auto w-7/12">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                        List of Books
                    </Typography>
                    <Typography variant="body2" color="blue-gray" className="mb-4 text-center">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {books.length === 0 ? <>
                                    <tr>
                                        <td className="p-4 border-b border-blue-gray-50" colSpan={TABLE_HEAD.length}>
                                            <Typography variant="small" color="blue-gray" className="font-normal text-center">
                                                No books found
                                            </Typography>
                                        </td>
                                    </tr>
                                </> : <>
                                    {books && books.map(({ id, title, author }, index) => {
                                        const isLast = index === books.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={id}>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {id}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {title}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {author}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                                        Edit
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    }
                                </>
                                }
                            </tbody>
                        </table>
                    </Typography>
                </CardBody>
            </Card>
        </>
    )
}
