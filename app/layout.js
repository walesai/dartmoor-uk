import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Dartmoor.uk | Explore Dartmoor National Park',
  description: 'Visitor guide to Dartmoor National Park – walks, attractions, history, practical information and the best of the moor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}