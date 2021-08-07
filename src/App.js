import './App.css';
import Header from './components/header';
import SectionOne from './components/sectionOne';
import Slider from './components/sectionTwo';
import Box from './components/box';
import YoutubeEmbed from './components/video'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
<Header />
<SectionOne />
<Slider />
{/* section three */}
<Container className="boxess container">
<Row>
    <Col><Box title="Continous Integration and Continous Delivery" desc="As an extension automation server,Jenkins can be used as a simple CI server
         or turned into the continous delivery hub for any project." /></Col>
    <Col><Box title="Easy installation" desc="Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help."/></Col>
    <Col><Box title="Easy configuration" desc="Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems"/></Col>
  </Row>
  <Row>
    <Col><Box title="Plugins" desc="With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain." /></Col>
    <Col><Box title="Extensible" desc="Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do."/></Col>
    <Col><Box title="Distributed" desc="Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster."/></Col>
  </Row>
</Container>
{/* You tube Video section */}
<YoutubeEmbed embedId="_MXtbjwsz3A"/>
    </div>
  );
}

export default App;
