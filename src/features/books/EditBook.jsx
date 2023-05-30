import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    CardBody
} from "@material-tailwind/react";
import { updateBook } from './booksSlice';

export default function EditBook() {

    let { userId } = useParams();
    const navigate = useNavigate();
    const disPatch = useDispatch();
    const getBook = useSelector((state) => state.booksReducer.books.find(({ id }) => id == userId));
    const [book, setBook] = React.useState({
        id: getBook.id,
        title: getBook.title,
        author: getBook.author,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        disPatch(updateBook(book));
        navigate('/show-books', { replace: true });
    };


    return (
        <div>
            <Card className="mt-10 justify-center mx-auto w-3/12 text-center">
                <CardBody className='text-center m-auto'>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                        Edit Book
                    </Typography>
                    <Card color="transparent" shadow={false}>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Title" onChange={handleChange} name='title' value={book.title} />
                                <Input size="lg" label="Author" onChange={handleChange} name='author' value={book.author} />
                            </div>
                            <Button className="mt-6" fullWidth onClick={handleSubmit}>
                                Update Now
                            </Button>
                        </form>
                    </Card>
                </CardBody>
            </Card>
        </div>
    )
}
