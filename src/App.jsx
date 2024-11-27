import SearchBox from "./components/searchBox/searchBox";
import ContactForm from "./components/contactForm/ContactFrom";
import ContactList from "./components/contactList/ContactList";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>PhoneBook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
