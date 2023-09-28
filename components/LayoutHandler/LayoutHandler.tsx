import DefaultLayout from './layouts/Default';
import LayoutTypeOne from './layouts/TypeOne';
import LayoutTypeTwo from './layouts/TypeTwo';

const LayoutHandler = ({ entry }) => {
  switch (entry.type) {
    case 'evento':
      return <LayoutTypeOne entry={entry} />;

    case 'vini':
      return <LayoutTypeTwo entry={entry} />;

    default:
      return <DefaultLayout entry={entry} />;
  }

  // switch (true) {
  //   case entry.dettagliPagina.tipopagina === 1:
  //     return <LayoutTypeOne entry={entry} />;
  //   case entry.type === 'evento':
  //     return <LayoutTypeTwo entry={entry} />;
  // }
};

export default LayoutHandler;
