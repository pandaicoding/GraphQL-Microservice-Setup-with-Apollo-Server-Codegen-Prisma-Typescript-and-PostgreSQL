import { Book } from "@prisma/client"
import { createBook } from "@src/data/bookService"
import prismaMock from "../__mocks__/prismaSingleton"


describe('book services test', () => {
    describe('create book test', () => {
        test('it should create book with passed in agrs', async () => {
            const mockBook: Book = {
                id: 1,
                title: 'book title',
                author: 'supper guy',
            };
    
            prismaMock.book.create.mockResolvedValue(mockBook);
    
            const bookCreated = await createBook(mockBook.title, mockBook.author);
    
            expect(bookCreated).toBe(mockBook);
            expect(prismaMock.book.create).toHaveBeenCalledTimes(1);
            expect(prismaMock.book.create).toHaveBeenCalledWith({data: { title: mockBook.title, author:mockBook.author}})
        });
    });
});
