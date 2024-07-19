"use client";
import React, { useState } from 'react';
import { AddNoteForm, NoteList } from '../../supabase/supabaseRequest';
import { useUser } from '@clerk/nextjs';
import Header from '../components/header';
import Footer from '../components/footer';

const Dashboard = () => {
  const [notes, setNotes]: any[] = useState(null);
  const { isSignedIn, user } = useUser();

  console.log(user?.publicMetadata.role);


  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col p-10">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className='col-span-5'>
            <div className="text-4xl font-semibold text-slate-900 mb-1">Welcome  <span className=' text-slate-600 text-3xl'>{user?.username}</span></div>
            <div className="text-2xl font-semibold text-slate-900 mb-4">to MAGPIE</div>
            <h6 className=' text-sm text-zinc-800 pb-1'>Please put your note here ,</h6>
            <AddNoteForm notes={notes} setNotes={setNotes} />
          </div>
          <div className='col-span-1'>
          </div>
          <div className='col-span-5'>
            <div className="text-2xl  font-sans font-semibold text-slate-900 mb-4">Your Notes</div>
            <NoteList notes={notes} setNotes={setNotes} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard