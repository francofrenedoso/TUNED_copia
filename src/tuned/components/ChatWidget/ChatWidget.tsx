/* 
Endpoint: Chat en Vivo

URL: `/api/chat`  // reemplazar por la real
Método: `GET`  
Frecuencia de consulta recomendada: cada 1-3 segundos (configurable desde frontend)

### Formato de respuesta esperado

IMPORTANTE: El orden de los comentarios se invierte en el frontend, por lo que el último comentario es el primero que se muestra.
La respuesta debe ser un array de objetos JSON, cada uno representando un comentario en el chat:


```json
[
  {
    "avatar": "string",        // URL de la imagen o texto del avatar
    "title": "string",         // Nombre de usuario
    "time": "string",          // Hora del comentario (ej: "Hace 1 segundo")
    "comment": "string",       // Texto del comentario
    "highlight": true,         // Si el comentario es destacado
    "isImage": false           // Si el avatar es imagen (true) o texto (false)
  },
  ...
]
```

### Detalles de los campos

- **avatar**:  
  - Si `isImage` es `true`, debe ser una URL válida de imagen.  
  - Si `isImage` es `false`, puede ser una inicial.

- **title**:  
  - Nombre del usuario que envía el comentario.

- **time**:  
  - Texto representando el tiempo transcurrido desde el envío.

- **comment**:  
  - Texto del comentario.

- **highlight**:  
  - `true` si el comentario debe destacarse visualmente y disparar notificación en frontend.

- **isImage**:  
  - `true` si el avatar es una imagen, `false` si es texto.

### Ejemplo de respuesta

```json
[
  {
    "avatar": "https://miapp.com/avatars/garfield.png",
    "title": "Garfield",
    "time": "Hace 1 segundo",
    "comment": "Garfield ama la lasaña y odia los lunes.",
    "highlight": true,
    "isImage": true
  },
  {
    "avatar": "G",
    "title": "Garfield",
    "time": "Hace 2 segundos",
    "comment": "Odio los lunes.",
    "highlight": false,
    "isImage": false
  }
]
```

# FUNCION DE RECEPCION DE MENSAJES
	Esta función simula la recepción de mensajes, reemplazar por la función de recepción real
	Espera un string que representa a la persona que está escribiendo.
	Ejemplo: "Garfield"

 */

import '../../style/tuned_colors.css';
import ChatItem from './ChatItem';
import CardDashboard from '../Card/CardDashboard';
import { useMediaQuery } from '../../hooks/useMediaQuey';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useConnection } from '../../hooks/useConnection';
import { useEffect, useState } from 'react';

import { useMemo } from 'react';

const ChatWidget = ({ width = '' }: { width?: string }) => {
	const isLgScreen = useMediaQuery('(min-width: 769px)');
	const isTitle = isLgScreen ? true : false;

	const chatModalData = {
		title: 'Comentarios',
		body: 'Es el flujo de mensajes en tiempo real del chat de esta transmisión, ordenados cronológicamente según su llegada durante el vivo.',
	};

	// Funcion de muestra de datos
	// cambiar esto por la api real
	const { data, loading } = useConnection<any[]>(
		'/src/tuned/components/ChatWidget/chatMock.json',
		3000,
	);
	const comments = Array.isArray(data) ? data : [];

	// Lista de comentarios invertida con useMemo
	const reversedComments = useMemo(() => {
		return [...comments].reverse();
	}, [comments]);

	// FUNCION DE RECEPCION DE MENSAJES
	// Esta función simula la recepción de mensajes, reemplazar por la función de recepción real
	const { data: personTyping } = useConnection<any[]>('/src/tuned/components/ChatWidget/chatMockPersonTyping.json', 5000); // Espera String
	
	const [footChatTextReception, setfootChatTextReception] = useState('');

	useEffect(() => {
		if (personTyping) {
			setfootChatTextReception(`${personTyping} esta escribiendo...`);
		} else {
			setfootChatTextReception('');
		}
	}, [personTyping]);
	// FIN DE FUNCION DE RECEPCION DE MENSAJES

	useEffect(() => {
		if (!loading && comments.length > 0) {
			const lastComment = comments[comments.length - 1];
			if (lastComment.highlight) {
				toast(
					<div>
						<div>
							<div className='mb-2 flex items-center'>
								{lastComment.isImage && (
									<img
										src={lastComment.avatar}
										alt='avatar'
										style={{
											width: 24,
											height: 24,
											borderRadius: '50%',
											marginRight: 8,
										}}
									/>
								)}
								<p className='text-xl font-bold tracking-wider text-purple-900'>
									{lastComment.title}
								</p>
							</div>
						</div>
						<p className='text_dark text-lg font-semibold'>{lastComment.comment}</p>
					</div>,
					{
						autoClose: 3500,
						position: 'bottom-right',
						hideProgressBar: true,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'light',
						transition: Bounce,
						style: {
							backgroundColor: '#f6f1ff',
							boxShadow: '0 0 10px rgba(250, 250, 250, 0.3)',
							border: '3px solid #fff',
						},
					},
				);
			}
		}
	}, [comments, loading]);

	return (
		<CardDashboard
			title='Live Chat'
			isTitle={isTitle}
			footChat={true}
			footChatText={footChatTextReception}
			width={width}
			modalData={chatModalData}>
			{loading && comments.length === 0 ? (
				<div className='flex h-[60dvh] w-full justify-center'>
					<p className='text_light animate-pulse py-10 text-2xl'>
						Cargando comentarios...
					</p>
				</div>
			) : (
				<div className='custom-scroll flex min-h-[60dvh] max-h-[68dvh] w-full flex-col gap-2'>
					{reversedComments.map((c, idx) => (
						<ChatItem
							key={idx}
							avatar={c.avatar}
							title={c.title}
							time={c.time}
							// highlight={c.highlight}
							isTitle={isTitle}
							isImage={c.isImage}>
							{c.comment}
						</ChatItem>
					))}
				</div>
			)}
		</CardDashboard>
	);
};

export default ChatWidget;
