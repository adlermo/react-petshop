import React from 'react';
import Pet from './components/Pet';
import Line from './components/Line';
import Table from './components/Table';
import Header from './components/Header';

import 'materialize-css/dist/css/materialize.css'

function App() {
  return (<>
    <Header />
    <section className='row container'>
      <h3>Bichinhos</h3>
      <Pet name="Chop" age="4" gender="Male" img='https://www.petcare.com.au/wp-content/uploads/2017/09/Rottweiler_Petcare-3.jpg' />
      <Pet name="Dena" age="5" gender="Female" img='https://www.discoverdogs.org.uk/wp-content/uploads/2019/11/dog-hero.jpg' />
      <Pet name="Gina" age="6" gender="Female" img='https://nestlords.com/wp-content/uploads/2020/04/dog3-1.jpg' />
      <Pet name="Hector" age="3" gender="Male" img='https://www.react2424.com/thumb/22/1/1/2/11233d314c495c42075a3933d2108d05.jpg' />
      <Pet name="Krypto" age="7" gender="Male" img='https://midnightlogic.files.wordpress.com/2015/08/krypto.jpg' />
      <Pet name="Lea" age="2" gender="Female" img='https://uploads.metropoles.com/wp-content/uploads/2020/03/12110818/jh8s.jpg' />
    </section>
    <section className='row container'>
      <h3>Pessoas</h3>
      <Table>
        <Line name="Bob" age="21" gender="Male" pet='adivinha' />
        <Line name="Clark" age="29" gender="Male" pet='adivinha' />
        <Line name="Dyana" age="25" gender="Female" pet='adivinha' />
        <Line name="Ester" age="22" gender="Female" pet='adivinha' />
        <Line name="Franklin" age="27" gender="Male" pet='adivinha' />
        <Line name="Giulia" age="19" gender="Female" pet='adivinha' />
      </Table>

    </section>
  </>
  );
}

export default App;
