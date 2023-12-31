from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, ForeignKey, DateTime
import datetime

class Base(DeclarativeBase):
  pass


class UserModel(Base):
  __tablename__='user'
  user_id:Mapped[int] = mapped_column(primary_key=True)
  email:Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
  profile: Mapped[list["UserProfile"]] = relationship()
  password:Mapped[str] = mapped_column(String(255), nullable=False)
  created_at=mapped_column(DateTime(), default=datetime.datetime.today, nullable=False)
  updated_at=mapped_column(DateTime(), default=datetime.datetime.now, onupdate=datetime.datetime.now, nullable=False)


class UserProfile(Base):
  __tablename__='profile'
  first_name: Mapped[str] = mapped_column(String(255))
  last_name: Mapped[str] = mapped_column(String(255))
  profile_id: Mapped[int] = mapped_column(Integer, primary_key=True)
  user_id: Mapped[int] = mapped_column(ForeignKey('user.user_id'))
  created_at=mapped_column(DateTime(), default=datetime.datetime.today, nullable=False)
  updated_at=mapped_column(DateTime(), default=datetime.datetime.now, onupdate=datetime.datetime.now, nullable=False)
