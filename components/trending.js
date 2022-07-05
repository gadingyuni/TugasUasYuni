import { Card, Col, Container, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/1.jfif" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Ngeri Sedap</Card.Text>
              <Card.Text>★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/2.jfif" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Iblis Kandungan</Card.Text>
              <Card.Text>★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/3.jfif" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Keluarga Cemara 2</Card.Text>
              <Card.Text>★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/4.jfif" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Cek Toko Sebelah</Card.Text>
              <Card.Text>★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/5.jfif" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Iblis Dalam Kandungan 2</Card.Text>
              <Card.Text>★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/6.jfif" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Iblis Dalam Kandungan</Card.Text>
              <Card.Text>★★★★★</Card.Text>
            </div>
          </Card>
        </Col>
      
      </Row>
    </Container>
  );
};
export default Trending;
