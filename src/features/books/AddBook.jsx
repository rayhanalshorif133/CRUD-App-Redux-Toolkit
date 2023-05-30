import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    CardBody
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './booksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
export default function AddBook() {


    const disPatch = useDispatch();
    const navigate = useNavigate();
    const lengthOfBooks = useSelector((state) => state.booksReducer.books.length);


    const [book, setBook] = React.useState({
        id: uuidv4(),
        title: '',
        author: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
        disPatch(addBook(book));
        navigate('/show-books', { replace: true });
    };


    return (
        <>
            <Card className="mt-10 justify-center mx-auto w-3/12 text-center">
                <CardBody className='text-center m-auto'>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                        Add New Book
                    </Typography>
                    <Card color="transparent" shadow={false}>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Title" onChange={handleChange} name='title' value={book.title} />
                                <Input size="lg" label="Author" onChange={handleChange} name='author' value={book.author} />
                            </div>
                            <Button className="mt-6" fullWidth onClick={handleSubmit}>
                                Add Book
                            </Button>
                        </form>
                    </Card>
                </CardBody>
            </Card>
        </>
    )
}
