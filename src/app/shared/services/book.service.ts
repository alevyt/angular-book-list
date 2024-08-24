import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: '1',
      title: 'Metamorphoses',
      author: 'Ovid',
      year: 8,
      description: 'This irresistible epic poem has an unusual structure: it is comprised of a series of short stories, linked by the theme of transformation, which flow seamlessly into one another.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/ovid-e1546957248923.jpg'
    },
    {
      id: '2',
      title: 'Hamlet',
      author: 'William Shakespeare',
      year: 1599,
      description: 'Considered by many to be Shakespeare’s finest work, Hamlet is a gloomy, twisted tragedy about a Danish prince who sets out to kill his uncle, spurred on by his father’s ghost.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Hamlet-Bloomsbury-e1546956897492.jpg'
    },
    {
      id: '3',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Pride-and-Prejudice-Simon-Schuster-400x516.jpg'
    },
    {
      id: '4',
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      year: 1847,
      description: 'A novel that explores themes of love, morality, and social class, centered on the life of the orphaned Jane Eyre.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Jane-Eyre-Simon-Schuster-672x1024.jpg'
    },
    {
      id: '5',
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      year: 1847,
      description: 'Emily Brontë’s complex, Gothic-flavoured novel makes an interesting companion to her sister’s more straightforwardly romantic Jane Eyre. In Wuthering Heights, Cathy and Heathcliff, childhood friends, are separated by class and their own questionable decisions; however, their all-consuming passion for one another is something which quite literally never dies. It’s a story of desire but also of the damaging effects of abuse and isolation on children.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Wuthering-Heights-Faber-e1546957035262.jpg'
    },
    {
      id: '6',
      title: 'Great Expectations',
      author: 'Charles Dickens',
      year: 1860,
      description: 'Any of Charles Dickens’ novels will give you a flavour of his flair for creating wacky characters and his compassion for the poor, but Great Expectations is perhaps the most universally loved of them all. It tells the story of Pip, who, after helping an escaped convict on the marshes and working as a companion to the frightening, deluded Miss Havisham, is told to nurse ‘great expectations’ for his future. Raised from poverty to live the opulent life of a London socialite, he hopes to win the hand of the disdainful Estella but comes to realise that the things he thought would bring him happiness are nothing compared to the family he has left behind.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Great-Expectations-Penguin-e1546956885284.jpg'
    },
    {
      id: '7',
      title: 'Tess of the d’Urbervilles',
      author: 'Thomas Hardy',
      year: 1891,
      description: 'All of Thomas Hardy’s works provide wonderful, moving portrayals of rural Victorian life, but Tess is his most famous. It is the story of ‘a pure woman faithfully presented’, who seeks to better herself but, due to chance, the unkindness of the world and her own honest mistakes, falls further and further into poverty and disrepute and is eventually driven to desperation. It is bleak but compelling, and the loving descriptions of the Wessex countryside and its inhabitants are stunning.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Tess-of-the-dUrbervilles-Penguin-e1546956985187.jpg'
    },
    {
      id: '8',
      title: 'Dubliners',
      author: 'James Joyce',
      year: 1914,
      description: 'Joyce’s early collection of short stories brings early twentieth-century Dublin to life in its depictions of religion, romance, politics and petty crime. Though the stories tackle topics as diverse as the death of an aged priest, the frustrations of an alcoholic stuck in a mind-numbingly dull job, and a lonely older man who cannot bear to let go of the habits which rule his life, they are linked by a common sense of Ireland’s stifling paralysis and a restless desire for change. The stories are often tragic but always worthwhile, eliciting new interpretations with every re-read.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Dubliners-Penguin-e1546956868359.jpg'
    },
    {
      id: '9',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      description: 'A novel about the American dream and the excesses of the Jazz Age, centered around the mysterious Jay Gatsby.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/The-Great-Gatsby-Penguin-e1546957016135.jpg'
    },
    {
      id: '10',
      title: 'Of Mice and Men',
      author: 'John Steinbeck',
      year: 1937,
      description: 'This novella tells the timeless story of two friends in Depression-era America, looking for work and dreaming of a place to call their own. Lennie, the more optimistic of the two but an eccentric outsider, eventually becomes a victim of his own strength, and his friend George is forced to deal with the consequences. Of Mice and Men is an engagingly written thriller which is no less powerful for its brevity.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Of-Mice-and-Men-Penguin-628x1024.jpg'
    },
    {
      id: '11',
      title: 'Rebecca',
      author: 'Daphne du Maurier',
      year: 1938,
      description: 'This page-turning Gothic mystery may seem to have a love story at its heart, but appearances can be deceiving. Du Maurier leads us to question not only what happened to Rebecca, the previous Mrs de Winter, but also whether Mr de Winter is really as charming as he seems and whether the narrator herself is entirely reliable. Featuring raging fires, love affairs and murder, Rebecca is the work of a mistress of the macabre writing at the height of her powers.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/Rebecca-Waterstones-e1546956975822.jpg'
    },
    {
      id: '12',
      title: 'Nineteen Eighty-Four',
      author: 'George Orwell',
      year: 1949,
      description: 'You should read this book if only to understand where pop culture references like ‘Big Brother’, ‘the Thought Police’ and ‘Room 101’ originated. It’s one of the most iconic examples of dystopian fiction; the main character, Winston, lives in a repressive state which is perpetually at war. He is trapped in an uninspiring job and subject to constant streams of propaganda, with his every move monitored by nameless government officials. Desperate to break free, he embarks on an illicit relationship with his co-worker Julia, which has devastating consequences.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/1984-Penguin-e1546956854124.jpg'
    },
    {
      id: '13',
      title: 'To Kill A Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      description: 'Set in the American deep south, To Kill A Mockingbird combines issues of social injustice with a gentle coming-of-age-story. The main character, Scout, observes the quirky characters she meets around her with humour and warmth, but the novel has a dark side, too: Scout’s father, Atticus, is defending a black man against a charge of rape, despite facing almost unassailable prejudice from his fellow white townsfolk.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/To-Kill-A-Mockingbird-HarperCollins-e1546957027545.jpg'
    },
    {
      id: '14',
      title: 'The Color Purple',
      author: 'Alice Walker',
      year: 1982,
      description: 'Alice Walker was the first black woman ever to win the Pulitzer Prize with this unique, uplifting epistolary novel. It is narrated by Celie, a beaten-down African-American woman living in the southern United States in the early 20th century. Repeatedly abused by her husband and the man she calls ‘father’, she is only truly able to find freedom and confidence when she meets and forms a relationship with Shug Avery, a glamorous singer.',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/The-Color-Purple-Barnes-and-Noble-e1546956996660.jpg'
    },
    {
      id: '15',
      title: 'The God of Small Things',
      author: 'Arundhati Roy',
      year: 1997,
      description: 'The God of Small Things is a Booker Prize-winning family saga set in Kerala, India. It’s notable not just for its gut-wrenchingly tragic plot but also for the author’s unusual use of language and a non-linear storyline which dips between past and present, examining the consequences of the main characters’ actions as they dare to transgress the ‘Love Laws’ that set out ‘who should be loved, and how. And how much.’',
      coverImageUrl: 'https://www.oxfordscholastica.com/wp-content/uploads/2019/01/The-God-of-Small-Things-HarperCollins-e1546957005716.png'
    }
  ];

  getBooks(): Book[] {
    return [...this.books];
  }

  addBook(book: Book): void {
    book.id = (this.books.length + 1).toString();
    this.books.push(book);
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: string): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}