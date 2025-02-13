import React, {useState} from 'react';
import useGetMe from "../../hooks/useGetMe";
import UserProfile from "../UserProfile";
import { API_URL } from "../../constants/urls";
import { snackVar } from "../../constants/snack";
import { UNKNOWN_ERROR_MESSAGE } from "../../constants/errors";

function Profile() {
	const [avatar, setAvatar] = useState<string | undefined>();
	const { data } = useGetMe();
	const { username, email, } = data?.me || {};

	const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const file = e.target.files?.[0];
			if (!file) return;

			const formData = new FormData();
			formData.append("file", file);

			const res = await fetch(`${API_URL}/users/image`, {
				method: "POST",
				body: formData,
			});

			if (!res.ok) {
				throw new Error("Image upload failed");
			}
			const {avatar: avatarFromApi} = await res.json();

			setAvatar(avatarFromApi);
		} catch (error) {
			snackVar(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-background text-text p-6">
			<div className="w-full max-w-md p-6 shadow-xl rounded-2xl animate-fadeIn">
				<div className="flex flex-col items-center text-center">

					<UserProfile avatar={avatar} name={username || ''} />
					<h1 className="text-2xl font-bold mt-4">{username || 'User'}</h1>
					<p className="text-sm text-text">{email || 'No email available'}</p>

					<label className="mt-6 relative cursor-pointer flex flex-col items-center justify-center border border-gray-300 rounded-lg p-3 hover:bg-neutral transition">
						<input type="file" onChange={handleFileUpload} className="hidden" />
						<span className="text-sm font-medium text-text">Upload New Avatar jpg</span>
					</label>

				</div>
			</div>
		</div>
	);
}

export default Profile;
