import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../Components/Header';
import AddBook from '../Components/AddBook';

storiesOf('List most searched title', module)
.add('with header',() => (<Header type= "Title" />))
.add('with AddBook',() => (<AddBook type= "Title" listSearchedBooks={true}
 bookType = {[
  <div>book1</div>,
  <div>book2</div>,
  <div>book3</div>]}
 />
));

storiesOf('List most searched Author', module)
.add('with header',() => (<Header type= "Author" />))
.add('with AddBook',() => (<AddBook type= "Author" listSearchedBooks={true} 
bookType = {[
  <div>author1</div>,
  <div>author2</div>,
  <div>author3</div>]}
 />));

 storiesOf('Search by Title', module)
.add('with header',() => (<Header type= "Title" />))
.add('with AddBook',() => (<AddBook type= "Title" listSearchedBooks={false}/>));

storiesOf('Search by Author', module)
.add('with header',() => (<Header type= "Author" />))
.add('with AddBook',() => (<AddBook type= "Author" />));

storiesOf('By Default', module)
.add('with header',() => (<Header/>))
.add('with AddBook',() => (<AddBook/>));


