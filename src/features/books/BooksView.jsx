import { Typography, Card, CardBody, ButtonGroup, Button } from '@material-tailwind/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from './booksSlice'
import { Link } from 'react-router-dom';

// id: 1,
//     title: 'The Hunger Games',
//         author: 'Suzanne Collins'
const TABLE_HEAD = ["Sl", "Title", "Author", "Actions"];

export default function BooksView() {

    const books = useSelector(
        (state) => state.booksReducer.books
    );
    const dispatch = useDispatch();


    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };


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
                                                        {index + 1}
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
                                                    <div className="flex w-max items-end gap-4">
                                                        <Button color="blue" size="sm">
                                                            <Link to={`/edit-book/${id}`}>Edit</Link>
                                                        </Button>
                                                        <Button color="red" size="sm" onClick={() => handleDeleteBook(id)}>
                                                            Delete
                                                        </Button>
                                                    </div>
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
