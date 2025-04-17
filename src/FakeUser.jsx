import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
 
export default function FakeUser() {
 
    const [user, setUser] = useState({
        name: "Ana Alface",
        username: "anaalface",
        email: "ana@ana.com",
        urlPhoto: "https://picsum.photos/200/300"
    });
 
    const loadUser = async () => {
        try {
            const resp = await fetch("https://randomuser.me/api/");
            const data = await resp.json();
            const fakeUser = data.results[0];
 
            const _user = {
                name: fakeUser.name.first + " " + fakeUser.name.last,
                username: fakeUser.login.username,
                email: fakeUser.email,
                urlPhoto: fakeUser.picture.medium,
            };
 
            setUser(_user);
        } catch (error) {
            console.error("Erro ao carregar o usuário:", error);
        }
    };
 
    useEffect(() => {
        loadUser();
    }, []);  
 
    return (
        <>
            <div className="flex items-center justify-between gap-1 bg-gray-200 my-1 p-2 rounded">
                <div className="flex items-center gap-2">
                    <div>
                        <img src={user.urlPhoto} alt="Foto do usuário" className="w-16 h-16 rounded-lg" />
                    </div>
                    <div className="leading-5">
                        <div className="font-semibold">
                            {user.name}
                        </div>
                        <div>
                            @{user.username}
                        </div>
                        <div className="text-gray-500">
                            {user.email}
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-400 p-1 rounded-lg flex items-center cursor-pointer hover:bg-gray-500"
                    onClick={loadUser}
                >
                    <Icon icon="mdi-refresh" className="text-black text-3xl" />
                </div>
            </div>
        </>
    );
}
 
