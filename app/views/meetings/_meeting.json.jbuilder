json.extract! meeting, :id, :subject, :created_at, :updated_at
json.url meeting_url(meeting, format: :json)
