import Search from '@/components/Form/Search'
import ReceipeGrid from '@/components/Recipe/Grid'
import {LoaderGrid} from '@/components/shared/Loader'
import store from '@/store';
import { useSelector } from 'react-redux';

export default function Home() {
  const isLoading = useSelector(
    (state: ReturnType<typeof store.getState>) => state.recipe.isLoading)

  const errorMessage = useSelector(
      (state: ReturnType<typeof store.getState>) => state.recipe.error);

  return (
    <main className="pt-8">
        <Search />
        {!isLoading &&  <ReceipeGrid />}
        {
          isLoading && <LoaderGrid />
        }

        {errorMessage && <p className='my-8 text-center text-2xl'>{errorMessage}</p>}

    </main>
  )
}
