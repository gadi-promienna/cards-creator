import NewListForm from "../components/NewListForm";
import TextPanel from "../components/TextPanel";
function Home(){
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    return(
        <div>
              <TextPanel icon="i" text={text} />
             <NewListForm />
        </div>
    )
}

export default Home;