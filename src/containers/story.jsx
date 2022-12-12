import { Contact } from "../components/contact";

const Story = (props) => {
    return (
        <>
        <div id="story">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6"> </div>
                    <div className="col-xs-12 col-md-6">
                        <img src="img/full-story.gif" style={{margin:'100px 0 500px 0', borderRadius:'14px'}} />
                    </div>
                </div>
            </div>
        </div>
        <Contact />
        </>
    );
};

export default Story;