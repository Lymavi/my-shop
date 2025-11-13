import { FormEvent, useState } from 'react';
// форм ивент - для событий, юзстейт - хук для компонентов
import { Alert, Button, Form} from 'react-bootstrap'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // функция обработки отправки формы
  // e.preventDefault() - останавливает перезагрузку страницы при отправке формы
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(!name || !email) return
    setSubmitted(true)
  }

  return(
    <div className="container py-4">
      <h2>Связаться с нами</h2>
      {submitted && <Alert variant="success">Спасибо, мы обязательно с Вами свяжемся!</Alert>}
      <Form onSubmit={onSubmit}>
        {/* нижний отступ 3 единицы */}
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control value={name} onChange={e => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Сообщение</Form.Label>
          <Form.Control as="textarea" rows={4} value={message} onChange={e => setMessage(e.target.value)} />
        </Form.Group>
        <Button type="submit">Отправить</Button>
      </Form>

    </div>
  )
}