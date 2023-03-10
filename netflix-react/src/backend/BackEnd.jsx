import { Container, Button, Form, Col, Row, Card, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";


const BackEnd=()=>{
    const [media,setMedia] = useState([])
    const [show, setShow] = useState(false);
    const [currentMediaId, setCurrentMediaId] = useState("")
    const [image, setImage] = useState(undefined);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setCurrentMediaId(id)
        setShow(true);
    }
    const handlePoster = async (event) =>{
        event.preventDefault();
        const formData = new FormData()
        formData.append("poster", image)
        try {
            console.log("submitting")
            let response = await fetch(
                process.env.REACT_APP_BACK_END+"/medias/"+currentMediaId+"/poster",
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (response.ok) {
                handleClose();
                fetchMovies();
            } else {
                alert("Fetching went wrong!!!!");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const fetchMovies = async ()=>{
        try {
            const response = await fetch(
              process.env.REACT_APP_BACK_END+"/medias",
            );
            if (response.ok) {
              let data = await response.json();
              setMedia(data)
            } else {
              alert("Fetching went wrong!!!!");
            }
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(() =>{
        fetchMovies();
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const media = {
          "title": formData.get("title"),
          "year": formData.get("year"),
        };
        console.log(media)
        try {
          let response = await fetch(
            process.env.REACT_APP_BACK_END+"/medias",
            {
              method: "POST",
              body: JSON.stringify(media),
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
        <Container>
            <Form className="mt-5 mb-5" onSubmit={handleSubmit}>
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
        <Container>
            <Row>
                {media.length>0&&media.map((item)=>(
                    <Card key={item.imdbID} className="mx-1 text-black">
                        <Card.Img src={item.poster} className="backend-card-image" onClick={()=>handleShow(item.imdbID)}/>
                        <Card.Title className="d-flex justify-content-center">{item.title} {item.year}</Card.Title>
                        <Button variant ="success" href={`${process.env.REACT_APP_BACK_END}/medias/${item.imdbID}/pdf`}>Download PDF</Button>
                    </Card>
                ))}
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose} size="lg" className="text-black">
        <Modal.Header closeButton>
          <Modal.Title>Change Poster</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handlePoster}>
          <Modal.Body>
              <Form.Group>
                <Form.Label>Choose an image to upload:</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setImage((e.target)?.files?.[0])
                  }
                />
              </Form.Group>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
        </>
    );
}

export default BackEnd;
