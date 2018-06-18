import React from 'react';
import { FormattedNumber } from 'react-intl';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
  },
};

class GridListExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tilesData:[],
      };
  }
  componentWillMount() {
    fetch('http://flower-server.us-east-2.elasticbeanstalk.com/api/bestflower/?format=json')
      .then(res => res.json())
      .then(tilesData => this.setState({tilesData}));
  }
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
  render() {
    const tilesData = this.state.tilesData;
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>
            <p className="sub_header">베스트 상품</p>
            <p className="sub_header_link"><a href="#">More >></a></p>
          </Subheader>
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
              actionIcon={<IconButton><ShoppingCart color="white" /></IconButton>}
            >
              <img src={tile.img} alt=""/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridListExampleSimple;