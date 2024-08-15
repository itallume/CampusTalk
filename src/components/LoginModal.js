"use client";
import React, { useState } from 'react';
import LoginModalStyles from "@/components/styles/LoginModalStyles.css"

export default function LoginModal({ showModal, setShowModal }) {

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <section className="relative bg-white p-6 rounded-lg shadow-lg w-80">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form>
              <div className="mb-4 relative">

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username


                  <div className="tooltip">
                    <span className="text-gray-500 cursor-pointer">ℹ️</span>
                    <span className="tooltiptext">Enter your username</span>
                  </div>




                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
