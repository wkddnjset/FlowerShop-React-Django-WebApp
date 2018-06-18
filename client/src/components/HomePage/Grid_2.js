import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import { FormattedNumber } from 'react-intl';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: "#FFF" ,
  },
};

class GridListExampleSingleLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tilesData:[],
    };
  }
  componentWillMount() {
    fetch('http://flower-server.us-east-2.elasticbeanstalk.com/api/mdflower/?format=json')
      .then(res => res.json())
      .then(tilesData => this.setState({tilesData}));
  }
/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
 render() {
    const tilesData = this.state.tilesData;
    return (
      <div style={styles.root}>
        <Subheader>
          <p className="sub_header">추천 상품</p>
          <p className="sub_header_link"><a href="#">More >></a></p>
        </Subheader>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.name}
              subtitle={<span>
                <FormattedNumber 
                  value={tile.price}
                  style="currency"
                  currency="KRW"
                /></span>}
              actionIcon={<IconButton><ShoppingCart color="#FFF" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} alt=""/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
export default GridListExampleSingleLine;