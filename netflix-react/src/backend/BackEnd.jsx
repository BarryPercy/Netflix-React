import { Container, Button, Form, Col, Row } from "react-bootstrap";


const BackEnd=()=>{

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const post = {
          "title": formData.get("title"),
          "year": formData.get("year"),
        };
        console.log(post)
        try {
          let response = await fetch(
            process.env.REACT_APP_BACK_END+"/media",
            {
              method: "POST",
              body: JSON.stringify(post),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          if (response.ok) {
          } else {
            
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <>
        <Container className="new-blog-container">
            <Form className="mt-5" onSubmit={handleSubmit}>
                    <Form.Group controlId="media-" className="mt-3">
                            <Form.Label>Movie Title</Form.Label>
                            <Form.Control size="lg" placeholder="Enter Title" name="title"/>
                            <br></br>
                            <Form.Label>Year of Release</Form.Label>
                            <Form.Control size="lg" placeholder="Enter Year" name="year"/>
                    </Form.Group>
                    <Button variant="primary"type="submit">Submit</Button>
            </Form>
        </Container>
        </>
    );
}

export default BackEnd;
