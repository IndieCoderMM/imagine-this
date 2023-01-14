import PageHeader from './components/PageHeader';
import PromptForm from './components/PromptForm';
import ImageFrame from './components/ImageFrame';

function App() {
  return (
    <div className='app'>
      <PageHeader />
      <PromptForm />
      <ImageFrame />
    </div>
  );
}

export default App;
